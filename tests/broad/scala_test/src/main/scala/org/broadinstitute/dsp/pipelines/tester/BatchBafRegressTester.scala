package org.broadinstitute.dsp.pipelines.tester

import java.net.URI

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import better.files.File
import org.broadinstitute.dsp.pipelines.batch.WorkflowTest
import org.broadinstitute.dsp.pipelines.config._

class BatchBafRegressTester(testerConfig: BatchBafRegressConfig)(
    implicit am: ActorMaterializer,
    as: ActorSystem
) extends ValidationWdlTester(testerConfig) {

  override val workflowName: String = "BatchBafRegress"

  val workflowDir
    : File = CromwellWorkflowTester.PipelineRoot / "broad" / "batchbafregress"

  lazy val localValidationWdlPath: File =
    CromwellWorkflowTester.DsdePipelinesRoot / "verification" / s"VerifyBatchBafRegress.wdl"

  override protected lazy val googleProject: String = {
    if (env.picardEnv.equals("dev")) {
      s"broad-gotc-${env.picardEnv}"
    } else {
      s"broad-arrays-${env.picardEnv}"
    }
  }

  // Validation uses the same options as the arrays workflow
  override protected lazy val validationWdlOptions: String = {
    readTestOptions(releaseDir, env)
  }

  protected lazy val resultsPrefix: URI = {
    URI.create(
      s"gs://broad-gotc-test-results/$envString/batchbafregress/$testTypeString/$timestamp/"
    )
  }

  protected lazy val truthPrefix: URI =
    URI.create(
      s"gs://broad-gotc-test-storage/bafregress/$testTypeString/truth/${testerConfig.truthBranch}/"
    )

  override protected def buildValidationWdlInputs(
      workflowTest: WorkflowTest
  ): String = {
    ""
  }
}
