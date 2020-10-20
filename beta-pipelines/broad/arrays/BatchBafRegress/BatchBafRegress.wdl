version 1.0

#import "../../../tasks/broad/IlluminaGenotypingArrayTasks.wdl" as GenotypingTasks

## Copyright Broad Institute, 2019
##
## This WDL pipeline implements data processing for Illumina Genotyping Arrays
##
##
## Runtime parameters are optimized for Broad's Google Cloud Platform implementation.
## For program versions, see docker containers.
##
## LICENSING :
## This script is released under the WDL source code license (BSD-3) (see LICENSE in
## https://github.com/broadinstitute/wdl). Note however that the programs it calls may
## be subject to different licenses. Users are responsible for checking that they are
## authorized to run all programs before running this script. Please see the docker
## page at https://hub.docker.com/r/broadinstitute/genomes-in-the-cloud/ for detailed
## licensing information pertaining to the included programs.

workflow BatchBafRegress {

    String pipeline_version = "1.0.0"

    input {
        Array[File] vcfs
        Array[File] vcf_indices
        # For BAFRegress
        File minor_allele_frequency_file

        Int disk_size
        Int preemptible_tries = 3
    }

    scatter (vcf in vcfs) {
        call BafRegress {
            input:
                input_vcf = vcf,
                input_vcf_index = vcf + ".tbi",
                maf_file = minor_allele_frequency_file,
                output_results_filename = "test.results.txt",
                disk_size = disk_size,
                preemptible_tries = preemptible_tries,
        }
    }

    call catOutputs {
        input:
          files = BafRegress.results_file
    }

    output {
        Array[File] bafregress_results_file = BafRegress.results_file
        File overall_results = catOutputs.results
    }
}

task catOutputs {
    input {
        Array[File] files
    }
    command <<<
        echo -n > output.txt
        while read -r a;
        do
            cat $a >> output.txt
        done < ~{write_lines(files)}
        head -1 output.txt > header.txt
        grep -v sample output.txt > body.txt
        cat header.txt body.txt > results.txt
    >>>
    runtime {
        docker: "gcr.io/gcp-runtimes/ubuntu_16_0_4:latest"
        disks: "local-disk 10 HDD"
        memory: "2 GiB"
        preemptible: 3
    }
    output {
        File results = "results.txt"
    }
}

task BafRegress {
    input {
        File input_vcf
        File input_vcf_index
        File maf_file
        String output_results_filename

        Int disk_size
        Int preemptible_tries
    }

    command {
        set -eo pipefail

        /root/tools/bcftools/bin/bcftools view -f 'PASS,.' ~{input_vcf} 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22 | python /root/tools/parseVcfToBAFRegress.py > temp.final_report.txt

        python /root/tools/bafRegress.py estimate --freqfile ~{maf_file} temp.final_report.txt > ~{output_results_filename}
    }
    runtime {
        docker: "us.gcr.io/broad-gotc-prod/bafregress:1.0"
        disks: "local-disk " + disk_size + " HDD"
        memory: "3.5 GiB"
        preemptible: preemptible_tries
    }

    output {
        File results_file = output_results_filename
    }
}