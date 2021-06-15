import React from "react";
import { IconStyle, IntentColor } from "@dataxelio/react-ui.utils.prop-types";
import { ResourceViewer } from "./resource-viewer";

// sets the Component preview in gallery view
export const BasicResourceViewer = () => {
  return (
    <ResourceViewer
      subTitle="Subnet Details"
      leftMargin="ml-5"
      rightMargin="mr-5"
      topMargin="mt-5"
      properties={[
        {
          id: "0",
          name: "Subnet ID",
          value: "subnet-57383a4d-3fe2-40be-852e-c3929bbd9869",
        },
        { id: "1", name: "Available IPv4 addresses", value: "4091" },
        { id: "2", name: "Route table", value: "rtb-352b394c" },
        { id: "3", name: "Auto-assign IPv6 address", value: "No" },
        { id: "4", name: "Owner", value: "179659478299" },
        {
          id: "5",
          name: "State",
          value: "Available",
          intent: IntentColor.SUCCESS,
          icon: "check-circle",
          iconStyle: IconStyle.REGULAR,
        },
        { id: "6", name: "IPv6 CIDR", value: "" },
        { id: "7", name: "Network ACL", value: "acl-6b593412" },
        { id: "8", name: "Auto-assign customer", value: "No" },
        {
          id: "9",
          name: "Subnet ARN",
          value: "arn:aws:ec2:eu-west-1:179659478299:subnet/subnet-5ddbfe3b",
        },
        { id: "10", name: "VPC", value: "vpc-3357bf4a" },
        { id: "11", name: "Availability Zone", value: "eu-west-1c" },
        {
          id: "12",
          name: "Status",
          value: "Failed",
          intent: IntentColor.DANGER,
          icon: "times-circle",
          iconStyle: IconStyle.REGULAR,
        },
        { id: "13", name: "Default subnet", value: "Yes" },
        { id: "14", name: "Customer-owned IPv4 pool", value: "" },
        { id: "15", name: "IPv4 CIDR", value: "172.31.0.0/20" },
        { id: "16", name: "Availability Zone ID", value: "euw1-az1" },
      ]}
    />
  );
};
