import React, {FocusEventHandler, useEffect} from 'react';
import CompanyApiContext from "./CompanyApiContext";
import {
    FormControl,
    Input,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Companies, Company} from "./api/AltanaApiClient";

type SearchAndResultsProps = {
    onCurrentCompanySelected: (c: Company | null) => void;
}

function SearchAndResults({onCurrentCompanySelected}: SearchAndResultsProps): JSX.Element {
    const api = React.useContext(CompanyApiContext);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState<null | Companies>(null);

    useEffect(() => {
        if (searchTerm.length > 2) {
            setIsLoading(true);
            api?.searchCompany(searchTerm)
                .then(companies => {
                    setSearchResults(companies);
                    setIsLoading(false);
                })
        }
    }, [api, searchTerm]);

    const onSearchTermChange: FocusEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        const newTerm = e.target.value;
        if (newTerm !== searchTerm) {
            setSearchTerm(newTerm);
            onCurrentCompanySelected(null);
            setSearchResults(null);
        }
    };

    return (
        <>
            <FormControl>
                <InputLabel htmlFor="company-name">Company Name</InputLabel>
                <Input id="company-name" onBlur={onSearchTermChange}/>
            </FormControl>
            {isLoading && <p>Loading ...</p>}
            {!isLoading && searchResults && (
                <TableContainer>
                    <Table style={{maxHeight: 400, overflowY: 'scroll', display: 'block'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Company Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchResults.companies?.map(c => (
                                <TableRow key={c.altana_canon_id}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                          onClick={() => onCurrentCompanySelected(c)}>
                                    <TableCell>{c.company_name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
}

export default SearchAndResults;
