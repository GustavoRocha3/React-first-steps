function TestEvents() {
    const exibirAviso = () => {
        alert('Segura a emoção ai chapa!');
    };

    return (
        <button onClick={exibirAviso}>Exibir Aviso</button>
    );
}

export default TestEvents;