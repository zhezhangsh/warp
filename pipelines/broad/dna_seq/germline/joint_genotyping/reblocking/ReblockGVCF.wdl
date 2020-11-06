version 1.0

import "../../tasks/broad/GermlineVariantDiscovery.wdl" as Calling

workflow ReblockGVCF {

  String pipeline_version = "1.1.0"

  input {
    File gvcf
    File gvcf_index
    String docker_image = "us.gcr.io/broad-gatk/gatk:4.1.8.0"
  }

  String gvcf_basename = basename(gvcf, ".g.vcf.gz")

  call Calling.Reblock as Reblock {
    input:
      gvcf = gvcf,
      gvcf_index = gvcf_index,
      output_vcf_filename = gvcf_basename + ".reblocked.g.vcf.gz",
      docker_image = docker_image
  }

  output {
    File output_vcf = Reblock.output_vcf
    File output_vcf_index = Reblock.output_vcf_index
  }
  meta {
    allowNestedInputs: true
  }
}
