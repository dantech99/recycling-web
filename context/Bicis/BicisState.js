import React, { useReducer } from "react";

import BicisContext from "./BicisContext";
import BicisReducer from "./BicisReducer";
import { supabase } from 'supabase/client';

import { GET_BICIS } from "../types";
import { useQuery } from '@tanstack/react-query';

const BicisState = (props) => {
  const initialState = {

    bicis: [],
  };
  let valor= 0

  const [state, dispatch] = useReducer(BicisReducer, initialState);


  const getBicis = async () => {

    let { data: lista_bicis} = await supabase
    .from('lista_bicis')
    .select('*')
    valor++
    /* dispatch({ type: GET_BICIS, payload: lista_bicis}) */;
    console.log(valor);
    return lista_bicis
  };


const createBici = async (
    Tittle, Valor,
    Descripcion, Condicion,
    Marca, Agno,
    Modelo, Talla,
    Material, Transmision,
    suspension) => {
    const { data, error } = await supabase
      .from('lista_bicis')
      .insert([
        {
          Tittle, Valor,
          Descripcion, Condicion,
          Marca, Agno,
          Modelo, Talla,
          Material, Transmision,
          suspension
        },
      ])
  }


  return (
    <BicisContext.Provider
      value={{
        bicis: state.bicis,
        getBicis,
        createBici,
      }}
    >
      {props.children}
    </BicisContext.Provider>
  );
};

export default BicisState;