import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import pets from "@/data/pets";

const api = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

export const getPets = async () => {
  const response = await api.get("/pets");
  return response.data;
};

export const getOnePet = async (id: number) => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};
