import React, {useEffect} from 'react';
import './index.css';
import {AppBar, Grid, Paper, Toolbar, Typography} from "@mui/material";
import SearchAndResults from "./SearchAndResults";
import {Company} from "./api/AltanaApiClient";
import CompanySupplierGraph from "./CompanySupplierGraph";
import SupplierList from "./SupplierList";

function App() {
    const [currentCompany, setCurrentCompany] = React.useState<Company | null>(null);
    const [supplier, setSupplier] = React.useState<string | null>(null);

    useEffect(() => {
        if (currentCompany === null) {
            setSupplier(null);
        }
    }, [currentCompany]);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Altana - Company & Supplier Graph
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper variant="outlined" style={{margin: 4, padding: 4}}>
                        <SearchAndResults onCurrentCompanySelected={setCurrentCompany}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper variant="outlined" style={{margin: 4, padding: 4}}>
                        <CompanySupplierGraph company={currentCompany} onSupplierSelected={setSupplier}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" style={{margin: 4, padding: 4}}>
                        <SupplierList supplierId={supplier} />
                    </Paper>
                </Grid>
            </Grid>
        </>
)
}

export default App;
