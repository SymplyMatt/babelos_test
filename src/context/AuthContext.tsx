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

interface FarmDetail {
    name: string;
    address: string;
    long: number;
    lat: number;
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
}


export const Context = createContext<ContextValue>({
    formInputs:{
        firstName: '',
        lastName: '',
        credential: '',
        email: '',
        password: '',
        confirmpassword: '',
        roleName: '' ,        
        gender: '',
        resAddress: '',
        ageGroup: '' ,
        hasBankAccount: 'Yes',
        hasSmartphone: 'Yes',
        profilePic: '',
        idType: '', 
        idurl: '',
        siteId: '',
        accountNumber: '',
        bankName: '',
        farmDetails: []
    },
    updateFormInputs : () => {}
});

const AuthContext = ({ children }: PropsWithChildren<{}>) => {
    const [formInputs, setFormInputs] = useState<Farmer> ({
        firstName: '',
        lastName: '',
        credential: '',
        email: '',
        password: '',
        confirmpassword: '',
        roleName: '' ,        
        gender: '',
        resAddress: '',
        ageGroup: '' ,
        hasBankAccount: "Yes",
        hasSmartphone: 'Yes',
        profilePic: '',
        idType: '', 
        idurl: '',
        siteId: '',
        accountNumber: '',
        bankName: '',
        farmDetails: []
    });

    const updateFormInputs = <K extends keyof Farmer>(key: K, value: Farmer[K]) => {
        const updatedInputs: Farmer = { ...formInputs };
    
        updatedInputs[key] = value;
    
        setFormInputs(updatedInputs);
    }
    
    const value: ContextValue = {
        formInputs,
        updateFormInputs
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
