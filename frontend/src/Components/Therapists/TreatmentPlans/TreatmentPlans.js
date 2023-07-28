import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function TreatmentPlans({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Treatments</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>CODE</Th>
                  <Th>TREATMENT</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <b>1</b>
                  </Td>
                  <Td>
                    <b>Test</b>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>2</b>
                  </Td>
                  <Td>
                    <b>Test</b>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>3</b>
                  </Td>
                  <Td>
                    <b>Test</b>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TreatmentPlans;
