import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import TreatmentPlans from "../TreatmentPlans/TreatmentPlans";
import PaymentButton from "../PaymentButton/PaymentButton";

function BookingModal({ isOpen, onClose }) {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const onClose1 = () => setIsOpen1(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}
      
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone No:</FormLabel>
              <Input placeholder="Phone No:" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Treatment Code</FormLabel>
              <Input placeholder="Treatment Code" />
              <Button mt={2} onClick={() => setIsOpen1(true)}>
                View Treatments
              </Button>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input placeholder="Amount" disabled defaultValue={450} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
          <PaymentButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
      <TreatmentPlans isOpen={isOpen1} onClose={onClose1} />
    </>
  );
}

export default BookingModal;
