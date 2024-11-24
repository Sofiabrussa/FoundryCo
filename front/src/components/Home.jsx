import Carrousel from "./Carrousel";

const Home = () => {
    return (
        
        <div className="container-fluid split-screen">
            {/* Mitad izquierda */}
            <div className="left-section centered-title">
                <h1 className="coming-soon-regular" style={{ fontSize: "6rem" }}>
                    FOUNDRY CO
                </h1>
                <p>Explore the Sky Like Never Before</p>
                <div className="horizontal-line"></div>
            </div>

            {/* Mitad derecha */}
            <div className="right-section">
                <Carrousel />
            </div>
        </div>
    );
};

export default Home;