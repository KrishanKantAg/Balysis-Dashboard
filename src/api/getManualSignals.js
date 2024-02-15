import { API_BASE_URL } from "./constants";

export const getManualSignals = async () => {
  const response = await fetch(`${API_BASE_URL}/strategy/signals?strategy_id=${1}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};
