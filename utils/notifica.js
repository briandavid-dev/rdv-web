import { notification } from "antd";

export default function (tipo) {
  if (tipo === "success") {
    notification["success"]({
      message: "Hola",
      description: "Tu operación ha sido realizada.",
    });
  } else if (tipo === "error") {
    notification["error"]({
      message: "Lo siento",
      description: `Ha ocurrido un error en la transacción, intenta de nuevo en unos minutos.`,
    });
  }
}
