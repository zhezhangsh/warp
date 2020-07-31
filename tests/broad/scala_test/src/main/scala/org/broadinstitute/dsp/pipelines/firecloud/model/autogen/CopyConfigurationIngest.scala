/**
  * FireCloud
  * Genome analysis execution service.
  *
  * OpenAPI spec version: 0.1
  *
  *
  * NOTE: This class is auto generated by the swagger code generator program.
  * https://github.com/swagger-api/swagger-codegen.git
  * Do not edit the class manually.
  */
package org.broadinstitute.dsp.pipelines.firecloud.model.autogen

case class CopyConfigurationIngest(
    /* Method configuration namespace */
    configurationNamespace: String,
    /* Method configuration name */
    configurationName: String,
    /* Method configuration snapshot id */
    configurationSnapshotId: Number,
    /* Method configuration destination namespace */
    destinationNamespace: String,
    /* Method configuration destination name */
    destinationName: String
)