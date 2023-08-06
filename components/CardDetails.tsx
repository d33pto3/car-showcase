import { CarProps } from "@/types";
import React from "react";

interface CarDetailsProps {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}

const CardDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
