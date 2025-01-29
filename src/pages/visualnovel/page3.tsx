import VNPageCycler from '@/components/VNPageCycler/VNPageCycler';
import React from 'react';


type page3Props = {

};

const page3: React.FC<page3Props> = () => {

    return (
        <div>
            <h1>Page 3</h1>
            <img src="/Placeholder_nobackground.jpg" alt="Page 2" />
            <VNPageCycler />
        </div>
    );
}
export default page3;