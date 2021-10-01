import { FaArrowDown, FaArrowUp } from "react-icons/fa";
export const sectionList = [
  (index) => {
    return (
      <div id="Section0">
        <a href=" "> João Gabriel Campos </a>{" "}
        <div>
          <h1> Animações com CSS e Js </h1>{" "}
          <p>
            Animações desempanhão um papel critico na melhoria da web, pois
            ajudam a fornecer feedback visuais muito melhores, tornando as
            interações muito mais ulteis e eficientes{" "}
          </p>{" "}
          <p>
            Porem, as animações precisam ser usadas com sabedoria, ou você pode
            criar uma pagina que causa distração ao invez de prover interação,
            Os objetivos das animações é servir como auxiliador e aprimorador, e
            não como um obstaculo ao se acessar o site ou{" "}
          </p>{" "}
          <h2> Objetivamente as animações podem oferecer ao projeto </h2>{" "}
          <ul>
            <li> Informação </li> <li> Hierarquia </li> <li> Foco </li>{" "}
            <li> Feedback </li> <li> Expressão da Marca </li>{" "}
          </ul>{" "}
        </div>{" "}
        <a href={`#Section${index + 1} `}>
          seguinte <FaArrowDown />
        </a>{" "}
      </div>
    );
  },
  (index) => {
    return (
      <div id="Section1">
        <div className="headerSection">
          <a href={`#Section${index - 1}`}>
            Voltar <FaArrowUp />
          </a>{" "}
          <h1> Tipo de animações de interface </h1>{" "}
        </div>{" "}
        <div className="typesAnimationContainer">
          <div className="typesAnimationItem">
            <h2> Funcional </h2>{" "}
            <ul>
              <li> Otimiza a experiência percebida </li>{" "}
              <li> Guia a atenção a pontos planejados </li>{" "}
              <li> feedback visual </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="typesAnimationItem">
            <h2> Material </h2>{" "}
            <ul>
              <li> Modelos consistente de Ui </li>{" "}
              <li> Define as relações espaciais entre telas e elementos </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="typesAnimationItem">
            <h2> Encantador </h2>{" "}
            <ul>
              <li> Humanidade & Diversão </li>{" "}
              <li> Sensação unica e memoravel </li>{" "}
              <li> Entreterimento + Relacionamento </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        <a href={`#Section${index + 1} `}>
          seguinte <FaArrowDown />
        </a>{" "}
      </div>
    );
  },
  (index) => {
    return (
      <div id="Section2">
        <div className="headerSection">
          <a href={`#Section${index - 1}`}>
            Voltar <FaArrowUp />
          </a>{" "}
          <h1> Hover e Transition </h1>{" "}
        </div>{" "}
        <div className="squeresHoverContainer">
          <div className='container-squere'>
            <div className="squareHover1"></div>
            <p> transition: 1500ms;</p>{" "}
          </div>
          <div className='container-squere'>
            {" "}
            <div className="squareHover2"></div> <p> transition: 5000ms;</p>
          </div>
          <div className='container-squere'>
            {" "}
            <div className='container-squere'>
              {" "}
              <div className="squareHover3"> </div>{" "}
              <p> 1 ou mais propriedades;</p>
            </div>
          </div>
          <div className='container-squere'>
            <div className="squareHover4"> </div>{" "}
            <p>transition-delay; & transition-property</p>
          </div>
          <div className='container-squere'>
            {" "}
            <div className="squareHover5"></div>{" "}
            <p>transition-timing-function</p>{" "}
          </div>
        </div>{" "}
        <a href={`#Section${index + 1} `}>
          seguinte <FaArrowDown />
        </a>{" "}
      </div>
    );
  },

  (index) => {
    return (
      <div id="Section3">
        <div className="headerSection">
          <a href={`#Section${index - 1}`}>
            Voltar <FaArrowUp />
          </a>{" "}
          <h1> Transform </h1>{" "}
        </div>{" "}
        <div className="TransformContainerFlex">
          <div>
            <h2> Transalte </h2>{" "}
            <div class="squeresTransformTranslateContainer">
              <div className="container">
                <div className="squareTransformTranslate1"> </div>{" "}
              </div>{" "}
              <div className="container">
                <div className="squareTransformTranslate2"> </div>{" "}
              </div>{" "}
              <div className="container">
                <div className="squareTransformTranslate3"> </div>{" "}
              </div>{" "}
            </div>
            <h2> Scale </h2>
            <div class="squeresTransformScaleContainer">
              <div className="squareTransformScale1"> </div>{" "}
              <div className="squareTransformScale2"> </div>{" "}
              <div className="squareTransformScale3"> </div>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <h2> Rotate </h2>
            <div class="squeresTransformRotateContainer">
              <div className="squareTransformRotate1"> </div>{" "}
              <div className="squareTransformRotate2"> </div>{" "}
              <div className="squareTransformRotate3"> </div>{" "}
            </div>
            <h2> Skew </h2>
            <div class="squeresTransformSkewContainer">
              <div className="squareTransformSkew1"> </div>{" "}
              <div className="squareTransformSkew2"> </div>{" "}
              <div className="squareTransformSkew3"> </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <a href={`#Section${index + 1}`}>
          seguinte <FaArrowDown />
        </a>{" "}
      </div>
    );
  },
  (index) => {
    return (
      <div id="Section4">
        <div className="headerSection">
          <a href={`#Section${index - 1}`}>
            Voltar <FaArrowUp />
          </a>{" "}
          <h1> Keyframe </h1>{" "}
          <p> sempre possivel usar somente @keyframe e opacity </p>{" "}
        </div>{" "}
        <div className="keyFrameContainer">
          <div className="expKeyFrame">
            <div class="c-loader"> </div> <div class="c-opacity"> </div>{" "}
          </div>{" "}
          <div className="runKeyFrame">
            <div class="SquereRun1"> </div> <div class="SquereRun2"> </div>{" "}
          </div>{" "}
        </div>
        <a href={`#Section${index + 1}`}>
          seguinte <FaArrowDown />
        </a>{" "}
      </div>
    );
  },
  (index) => (
    <div id="Section5">
      <div className="headerSection">
        <a href={`#Section${index - 1}`}>
          Voltar <FaArrowUp />
        </a>
        <h1>Exemplo de Animações </h1>
      </div>
      <div class="">
        <a href="https://animate.style/" target="_blank"  rel="noreferrer" >animation.css</a>
      </div>
      <a href={`#Section${index + 1}`}>
        OBRIGADO A TODOS
      </a>
    </div>
  ),
];
