import { createContext, useState, PropsWithChildren} from 'react';

interface Farmer {
    firstName: string;
    lastName: string;
    credential: string;
    email: string;
    password: string;
    confirmpassword: string;
    roleName: string;
    gender: string;
    resAddress: string;
    ageGroup: string;
    hasBankAccount:   string;
    hasSmartphone:  string;
    profilePic: string;
    idType: string; 
    idurl: string;
    siteId: string;
    accountNumber: number | string;
    bankName: string;
    farmDetails: FarmDetail[];
} 

export interface FarmDetail {
    name: string;
    address: string;
    long: number;
    lat: number;
    id?: number;
    docUploads: DocumentUpload[];
    crops: Crop[];
}

interface DocumentUpload {
    url: string;
}

interface Crop {
    cropId: string;
    farmSeasonStart: string;
    farmSeasonEnd: string;
}

interface ContextValue {
    formInputs: Farmer;
    updateFormInputs: Function;
    setFormInputs: Function;
    setLoading: Function;
    loading: boolean;
}


export const Context = createContext<ContextValue>({
    formInputs:{
        firstName: '',
        lastName: '',
        credential: '',
        email: '',
        password: '',
        confirmpassword: '',
        roleName: 'Farmer' ,        
        gender: 'Male',
        resAddress: '',
        ageGroup: '18 - 25' ,
        hasBankAccount: 'Yes',
        hasSmartphone: 'Yes',
        profilePic: '',
        idType: 'National ID card (NIN)', 
        idurl: '',
        siteId: 'Ikotun',
        accountNumber: '',
        bankName: '',
        farmDetails: []
    },
    updateFormInputs : () => {},
    setFormInputs : () => {},
    loading : false,
    setLoading : () => {},
});

const AuthContext = ({ children }: PropsWithChildren<{}>) => {
    const [formInputs, setFormInputs] = useState<Farmer> ({
        firstName: '',
        lastName: '',
        credential: '',
        email: '',
        password: '',
        confirmpassword: '',
        roleName: 'Farmer' ,        
        gender: 'Male',
        resAddress: '',
        ageGroup: '18 - 25' ,
        hasBankAccount: 'Yes',
        hasSmartphone: 'Yes',
        profilePic: "https://***",
        idType: 'National ID card (NIN)', 
        idurl: "https://***",
        siteId: 'Ikotun',
        accountNumber: '',
        bankName: '',
        farmDetails: []
    });
    const [loading, setLoading] = useState<boolean>(false);
    const updateFormInputs = <K extends keyof Farmer>(key: K, value: Farmer[K]) => {
        const updatedInputs: Farmer = { ...formInputs };
        updatedInputs[key] = value;
        setFormInputs(updatedInputs);
    }
    
    const value: ContextValue = {
        formInputs,
        updateFormInputs,
        setFormInputs,
        loading,
        setLoading 
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
