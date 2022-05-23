import React, {useEffect} from 'react';
import {TradingPartners} from "./api/AltanaApiClient";
import CompanyApiContext from "./CompanyApiContext";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

type SupplierListProps = {
    supplierId: string | null;
}
function SupplierList({ supplierId }: SupplierListProps): JSX.Element {
    const api = React.useContext(CompanyApiContext);
    const [isLoading, setIsLoading] = React.useState(false);
    const [tradingPartners, setTradingPartners] = React.useState<null | TradingPartners>(null);

    useEffect(() => {
        if (supplierId) {
            setIsLoading(true);
            api?.getTradingPartners(supplierId)
                .then((tradingPartners: TradingPartners) => {
                    setTradingPartners(tradingPartners);
                    setIsLoading(false);
                });
        }
    }, [api, supplierId]);

    if (!supplierId) {
        return <p>Choose a supplier node from the middle</p>
    }

    return (
        <div>
            <p>Analyzing supplier {supplierId}</p>
            {isLoading && <p>Loading ...</p>}
            {!isLoading && tradingPartners && (
                <TableContainer>
                    <Table style={{maxHeight: 400, overflowY: 'scroll', display: 'block'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Trading Partner</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tradingPartners.companies?.map(c => (
                                <TableRow key={c.altana_canon_id}
                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                    <TableCell>{c.company_name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}

export default SupplierList;
