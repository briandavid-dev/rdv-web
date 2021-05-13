import React, { useState, useEffect } from "react";
import { Button, Modal, Divider, Table, Spin, Popconfirm, Space } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import css from "styled-jsx/css";
import BtnAgregar from "./BtnAgregar";
import BtnActualizar from "./BtnActualizar";
import ApiProductos from "./services";
import notifica from "../../../../utils/notifica";

const stylesCss = css.global`
  h2,
  h3,
  h1,
  h4,
  h5 {
    color: #3d2514 !important;
  }
`;

const { Column } = Table;

const Productos = (props) => {
  const { empresaId, empresaNombre, empresaLenguaje } = props;

  const [modalProductosVisible, setModalProductosVisible] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [dataProductos, setDataProductos] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleProductos = () => {
    setModalProductosVisible(true);

    setLoadingTable(true);
    ApiProductos.getProductos(empresaId, "productos")
      .then((response) => {
        const { codigo, results } = response.data;
        if (codigo === "1") {
          const dataProductos = results.map((producto) => {
            return {
              key: producto.id,
              id: producto.id,
              titulo: producto.name,
              fechaCreacion: producto.created_at,
              imageBase64: producto.image_base64,
              imageExtension: producto.image_extension,
              lenguaje: producto.language,
              contenido: producto.content_html,
            };
          });

          setDataProductos(dataProductos);
          setLoadingTable(false);
        }
      })
      .catch((error) => {
        console.log(`error`, error);
        setLoadingTable(false);
      });
  };

  const handleDelete = (id) => {
    ApiProductos.deteteProducto({ id })
      .then((response) => {
        if (response.data.codigo === "1") {
          const updateProductos = dataProductos.filter(
            (producto) => producto.id !== id
          );

          setDataProductos(updateProductos);
          // setFileCertificado([]);
          // handleCancel();
          setConfirmLoading(false);
          notifica("success");
        } else {
          notifica("error");
        }
      })
      .catch((error) => {
        notifica("error");
        setConfirmLoading(false);
      });
  };

  // useEffect(() => {
  //   setLoadingTable(true);
  //   ApiProductos.getProductos(empresaId, "productos")
  //     .then((response) => {
  //       const { codigo, results } = response.data;
  //       if (codigo === "1") {
  //         const dataProductos = results.map((producto) => {
  //           return {
  //             key: producto.id,
  //             id: producto.id,
  //             titulo: producto.name,
  //             fechaCreacion: producto.created_at,
  //             imageBase64: producto.image_base64,
  //             imageExtension: producto.image_extension,
  //             lenguaje: producto.language,
  //             contenido: producto.content_html,
  //           };
  //         });

  //         setDataProductos(dataProductos);
  //         setLoadingTable(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(`error`, error);
  //       setLoadingTable(false);
  //     });
  // }, []);

  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Button
        onClick={() => {
          handleProductos();
        }}
      >
        Productos
      </Button>

      <Modal
        visible={modalProductosVisible}
        onCancel={() => {
          setModalProductosVisible(false);
        }}
        footer={false}
      >
        <h3>Productos de {empresaNombre}</h3>
        <Divider></Divider>
        <BtnAgregar
          empresaId={empresaId}
          empresaNombre={empresaNombre}
          empresaLenguaje={empresaLenguaje}
          dataProductos={dataProductos}
          setDataProductos={setDataProductos}
        />
        <br />
        <br />
        <Spin spinning={loadingTable}>
          <Table dataSource={dataProductos} pagination={false}>
            {/* <Column title="id" dataIndex="id" key="id" /> */}
            <Column title="Producto" dataIndex="titulo" key="titulo" />
            {/* <Column title="Lenguaje" dataIndex="lenguaje" key="lenguaje" />
            <Column
              title="Fecha de Creación"
              dataIndex="fechaCreacion"
              key="fechaCreacion"
            /> */}
            <Column
              title="Opciones"
              key="opciones"
              render={(text, record) => (
                <Space size="middle">
                  <BtnActualizar
                    empresaId={empresaId}
                    empresaNombre={empresaNombre}
                    empresaLenguaje={empresaLenguaje}
                    dataProductos={dataProductos}
                    setDataProductos={setDataProductos}
                    idUpdate={record.id}
                  />

                  <Popconfirm
                    title="¿Seguro de eliminar este producto?"
                    okText="Si"
                    cancelText="No"
                    onConfirm={() => {
                      handleDelete(record.id);
                    }}
                    okButtonProps={{ loading: confirmLoading }}
                  >
                    <DeleteTwoTone onClick={showPopconfirm} />
                  </Popconfirm>
                </Space>
              )}
            />
          </Table>
        </Spin>
      </Modal>
    </>
  );
};

export default Productos;
