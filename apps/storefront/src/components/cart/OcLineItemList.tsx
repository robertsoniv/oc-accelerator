/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Card,
  CardBody,
  Text,
  VStack
} from "@chakra-ui/react";
import { LineItem } from "ordercloud-javascript-sdk";
import React, { FunctionComponent, useMemo } from "react";
import OcLineItemCard from "./OcLineItemCard";

interface OcLineItemListProps {
  emptyMessage?: string;
  editable?: boolean;
  lineItems?: LineItem[];
  onChange: (newLineItem: LineItem) => void;
}

const OcLineItemList: FunctionComponent<OcLineItemListProps> = ({
  emptyMessage,
  editable,
  lineItems,
  onChange,
}) => {
  const brands: string[] = useMemo(() => {
    const supplierIDs = lineItems
      ?.map((item) => item.Product?.DefaultSupplierID)
      .filter((id): id is string => !!id);

    return Array.from(new Set(supplierIDs));
  }, [lineItems]);

  return lineItems && lineItems.length ? (
    <VStack gap={6} alignItems="flex-start" w="full">
      {brands?.map((brand) => {
        return (
          <React.Fragment key={brand}>
            <Card
              variant="outline"
              w="full"
              mt={-4}
              rounded="none"
              bgColor="blackAlpha.100"
              borderColor="transparent"
            >
              <CardBody display="flex" flexDirection="column" gap={2}>
                {lineItems
                  ?.filter((li) => li.Product?.DefaultSupplierID === brand)
                  .map((li, idx) => (
                    <OcLineItemCard
                      key={idx}
                      lineItem={li}
                      editable={editable}
                      onChange={onChange}
                    />
                  ))}
              </CardBody>
            </Card>
          </React.Fragment>
        );
      })}
    </VStack>
  ) : (
    <Text alignSelf="flex-start">{emptyMessage}</Text>
  );
};

export default OcLineItemList;