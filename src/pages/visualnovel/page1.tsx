import VNPageCycler from '@/components/VNPageCycler/VNPageCycler';
import React from 'react';

type page1Props = {

};

const page1: React.FC<page1Props> = () => {

    return (
            <div>
                    <h1>Page 1</h1>
                    <img src="/Placeholder_nobackground.jpg" alt="Page 2" />
                    <VNPageCycler />
                </div>
    );
}
export default page1;