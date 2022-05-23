import React from 'react';
import {CompanyApi} from "./api/AltanaApiClient";

const companyApi = new CompanyApi({
    apiKey: 'MTpJbnRlcnZpZXclMjAyMDIxLTA5LTIyOjE2MzIzNTk2NTU6NWNhMzViYjk.ZmEwZWI5OTdmYWJjYWFlZWJmY2YyNGYyN2FkMmQ5YzkwODQ4NWNiYg',
});

const CompanyApiContext = React.createContext<CompanyApi>(companyApi);

export default CompanyApiContext;


