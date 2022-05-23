import React from 'react';
import {Company} from "./api/AltanaApiClient";
import {ForceGraph2D} from "react-force-graph";

type CompanySupplierGraphProps = {
    company: Company | null;
    onSupplierSelected: (supplierId: string) => void;
};

function CompanySupplierGraph({company, onSupplierSelected}: CompanySupplierGraphProps): JSX.Element {
    if (!company) {
        return <p>Search & Choose a company on the left</p>
    }

    const nodes = [{id: company.altana_canon_id}];
    const links: any[] = [];

    company.company_context.suppliers.forEach((suppId: string) => {
        nodes.push({id: suppId});
        links.push({
            source: suppId,
            target: company.altana_canon_id,
        });
    });

    const handleClick = (node: any) => {
        onSupplierSelected(node.id);
    }

    return (
        <div>
            <p>Analyzing <b>{company.company_name}</b></p>
            <ForceGraph2D
                graphData={{
                    nodes,
                    links,
                }}
                nodeLabel="id"
                nodeAutoColorBy="group"
                onNodeClick={handleClick}
                width={698}
            />
        </div>
    );
}

export default CompanySupplierGraph;
