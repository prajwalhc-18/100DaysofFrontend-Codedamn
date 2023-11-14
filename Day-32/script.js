document.getElementById('getNetworkInfo').addEventListener('click', () => {
    const networkInfoContainer = document.getElementById('networkInfoContainer');

    if ('connection' in navigator) {
        const connection = navigator.connection;

        // Display network information
        networkInfoContainer.innerHTML = `
            <p>Effective Type: ${connection.effectiveType}</p>
            <p>Downlink: ${connection.downlink} Mbps</p>
            <p>Save Data: ${connection.saveData ? 'On' : 'Off'}</p>
            <p>Round-Trip Time (RTT): ${connection.rtt} ms</p>
        `;
    } else {
        networkInfoContainer.innerHTML = '<p>Network Information API not supported.</p>';
    }
});
