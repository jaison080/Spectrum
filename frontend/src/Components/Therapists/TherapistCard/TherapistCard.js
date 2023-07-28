import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import BookingModal from "../BookingModal/BookingModal";
import TreatmentPlans from "../TreatmentPlans/TreatmentPlans";

function TherapistCard() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const onClose1 = () => setIsOpen1(false);

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU"
            width="100%"
            alt="Therapist"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Jagannath E Shahi</Heading>
            <Text>
              Provides mental health support, personalized treatment plans, and
              guidance to address emotional challenges, fostering trust and
              promoting emotional well-being.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              ₹ 450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => setIsOpen(true)}
            >
              Book Appointment
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => setIsOpen1(true)}
            >
              View Treatments
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <BookingModal isOpen={isOpen} onClose={onClose} />
      <TreatmentPlans isOpen={isOpen1} onClose={onClose1} />
    </div>
  );
}

export default TherapistCard;
