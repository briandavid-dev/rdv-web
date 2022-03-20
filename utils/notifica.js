import { notification } from "antd";

export default function (tipo, error = "default message") {
  if (tipo === "success") {
    notification["success"]({
      message: "Hola",
      description: "Tu operación ha sido realizada.",
    });
  } else if (tipo === "error") {
    console.log("error", error);
    notification["error"]({
      message: "Lo siento",
      description: `Ha ocurrido un error en la transacción, intenta de nuevo en unos minutos.`,
    });
  }
}
