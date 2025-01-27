import VNPageCycler from '@/components/VNPageCycler/VNPageCycler';
import React from 'react';


type page2Props = {

};

const page2: React.FC<page2Props> = () => {

    return (<div>
        <h1>Page 2</h1>
        <img src="/Screenshot-2025-01-23-104607.png" alt="Page 2" />
        <VNPageCycler />
    </div>

    );
}
export default page2;