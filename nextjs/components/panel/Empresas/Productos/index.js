import React, { useState } from "react";
import { Button, Modal, Divider, Table, Spin, Popconfirm } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

import css from "styled-jsx/css";
import BtnAgregar from "./BtnAgregar";

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

  const handleProductos = () => {
    setModalProductosVisible(true);
  };
  const handleEdit = (id) => {
    console.log(`id`, id);
  };
  const handleDelete = (id) => {
    console.log(`id`, id);
  };

  return (
    <>
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
        />
        <br />
        <br />
        <Spin spinning={loadingTable}>
          <Table dataSource={dataProductos} pagination={false}>
            {/* <Column title="id" dataIndex="id" key="id" /> */}
            <Column title="Nombre" dataIndex="titulo" key="titulo" />
            <Column title="Lenguaje" dataIndex="lenguaje" key="lenguaje" />
            <Column
              title="Fecha de Creación"
              dataIndex="fechaCreacion"
              key="fechaCreacion"
            />
            <Column
              title="Opciones"
              key="opciones"
              render={(text, record) => (
                <Space size="middle">
                  <EditTwoTone
                    onClick={() => {
                      handleEdit(record.id);
                    }}
                  />
                  <Popconfirm
                    title="¿Seguro de eliminar este producto"
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
