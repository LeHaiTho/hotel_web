export const COLORS = {
    BACKGROUND: "#003b95",
    BUTTON: "#006ce4",
    ALINK: "#208aeb"
  };
export const APP1 = {
  name: "MNMQ.com"
}

export const formatCurrency = (amount:number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};
// Địa chỉ server
export const baseUrl = "http://localhost:5000/"