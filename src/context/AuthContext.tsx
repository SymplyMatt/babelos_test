import React, { createContext, useState, PropsWithChildren, useEffect} from 'react';
import { useLocation } from 'react-router-dom';


interface ContextValue {
    formInputs: FormInputs;
}

export interface FormInputs {
    phone: string;
}
export const Context = createContext<ContextValue>({
    formInputs: {
        phone: '',
    }
});

const AuthContext = ({ children }: PropsWithChildren<{}>) => {
    const [formInputs, setFormInputs] = useState<FormInputs>({
        phone: '',
    });
    const location = useLocation();

    useEffect(()=>{
        setFormInputs({
            phone: '',
        });
    },[]);
    
    const value: ContextValue = {
        formInputs,
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
