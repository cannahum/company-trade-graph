import React from 'react';
import './index.css';
import {AppBar, Grid, Paper, Toolbar, Typography} from "@mui/material";
import SearchAndResults from "./SearchAndResults";
import CompanyApiContext from "./CompanyApiContext";
import {CompanyApi} from "./api/AltanaApiClient";

function App() {
    const companyApi = new CompanyApi({
        apiKey: 'MTpJbnRlcnZpZXclMjAyMDIxLTA5LTIyOjE2MzIzNTk2NTU6NWNhMzViYjk.ZmEwZWI5OTdmYWJjYWFlZWJmY2YyNGYyN2FkMmQ5YzkwODQ4NWNiYg',
    });

    return (
        <CompanyApiContext.Provider value={companyApi}>
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
                        <SearchAndResults/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper variant="outlined" style={{margin: 4, padding: 4}}>
                        <p>2</p>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" style={{margin: 4, padding: 4}}>
                        <p>3</p>
                    </Paper>
                </Grid>
            </Grid>
        </CompanyApiContext.Provider>
    );
}

export default App;
