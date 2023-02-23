function TestEvents() {
    const exibirAviso = () => {
        alert('Eita!');
    };

    return (
        <button onClick={exibirAviso}>Exibir Aviso</button>
    );
}

export default TestEvents;