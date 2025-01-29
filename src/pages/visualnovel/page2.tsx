import VNPageCycler from '@/components/VNPageCycler/VNPageCycler';
import React from 'react';


type page2Props = {

};

const page2: React.FC<page2Props> = () => {

    return (
        <div>
            <h1>Page 2</h1>
            <img src="/Placeholder_nobackground.jpg" alt="Page 2" />
            <VNPageCycler />
        </div>
    );
}
export default page2;