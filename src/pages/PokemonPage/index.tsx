import React from "react";

export interface PokemonProps  {
    id: string | number
}

const PokemonPage: React.FC<PokemonProps> = ({id}) => {
    return (
        <div>
            This is pokemon page {id}
        </div>
    );
}

export default PokemonPage;