import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

export interface IKoloDrawer {
  p?: string;
  placement: any;
  isOpen: boolean;
  children: any;
  onClose: () => void;
  btnRef: any;
  title: string;
  footer: string;
  finalFocusRef: any;
}

const KoloDrawer: React.FC<IKoloDrawer> = (props) => {
  return (
    <Flex>
      <Drawer
        isOpen={props.isOpen}
        placement={props.placement}
        onClose={props.onClose}
        finalFocusRef={props.btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={props.p} my={props.p} />
          <DrawerHeader my={props.p || "5"}>
            <Text as="p"> {props.title} </Text>
          </DrawerHeader>
          <DrawerBody>{props.children}</DrawerBody>
          <DrawerFooter>{props.footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default KoloDrawer;
