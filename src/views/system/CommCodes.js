import { useEffect, useState } from 'react';

export default function CommCodes() {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div>
            <h2>commCodes</h2>
        </div>
    );
}
