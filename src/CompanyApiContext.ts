import React from 'react';
import {CompanyApi} from "./api/AltanaApiClient";

const CompanyApiContext = React.createContext<CompanyApi | null>(null);

export default CompanyApiContext;
