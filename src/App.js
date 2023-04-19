import React, { useEffect, useState } from "react";
import "./styles.scss";
import { apiHandler } from "./api/api";
import axios from "axios";
import Produtos from "./components/Produtos";
import Loading from "./components/loading";

function App() {
  const [api, setApi] = useState(0);
  const [data, setData] = useState(null);
  const [value, setValue] = useState(false);

  useEffect(() => {
    getData();
  }, [api]);

  async function getData() {
    data && setData(null);
    axios.get(apiHandler(api)).then((response) => {
      setData(response.data.record.items);
      setValue(response.data.record.totalizers[0].value);
    });
  }

  return (
    <div className="main-div">
      <div className="main-content">
        <div className="main-header">
          <h1>Carrinho</h1>
          <button onClick={() => setApi(api === 0 ? 1 : 0)}>
            Mudar exemplos
          </button>
        </div>
        <div className="main-items">
          {data ? (
            <>
              {data.map((res) => {
                return (
                  <Produtos
                    name={res.name}
                    price={res.price}
                    image={res.imageUrl}
                    detailUrl={res.detailUrl}
                  />
                );
              })}
              <label style={{ alignSelf: "flex-end", margin: 0, padding: 4 }}>
                Itens : {data.length} | Total : R$ {value / 100}
              </label>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>

      {data && (
        <div className="main-checkout">
          <div
            className={value / 100 > 10 ? "main-notify-green" : "main-notify"}
          >
            {value / 100 > 10 ? (
              <h3>Parabéns, sua compra tem frete grátis !</h3>
            ) : (
              <h3>
                Por mais {10 - value / 100}, sua compra vai ter frete grátis
              </h3>
            )}
          </div>
          <button>Finalizar</button>
        </div>
      )}
    </div>
  );
}

export default App;
