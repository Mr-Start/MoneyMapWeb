import { incomeReq, incomeRes } from "@/schemas/incomeSchema";
import api from "./index";

export const getIncomesByUser = async (): Promise<incomeRes[]> => {
  const response = await api.get("/income");
  return response.data;
};

export const createIncome = async (data: incomeReq): Promise<incomeRes> => {
  const response = await api.post("/income", data);
  return response.data;
};

export const deleteIncome = async (
  id: string
): Promise<{
  message: string;
}> => {
  const { data } = await api.delete(`/income/${id}`);
  return data;
};

export const getIncomeById = async (id: string): Promise<incomeRes> => {
  const response = await api.get(`/income/${id}`);
  return response.data;
};

export const updateIncome = async ({
  id,
  data,
}: {
  id: string;
  data: incomeRes;
}): Promise<incomeRes> => {
  const response = await api.put(`/income/${id}`, data);
  return response.data;
};
