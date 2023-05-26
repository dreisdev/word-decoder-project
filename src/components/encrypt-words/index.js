import './styles.css'
import { useRef, useEffect } from 'react'
import logoImage from '../../assets/alura.png'
import atentionImage from '../../assets/bi_exclamation-circle-fill.png'
import imageStart from '../../assets/imageSearch.svg'



function Encryption() {
    const textAreaRef = useRef(null)
    const textInAreaRef = useRef(null)
    const startRef = useRef(null);

    useEffect(() => {
        toggleStartImage();
    }, []);


    function toggleStartImage() {
        if (startRef.current) {
            startRef.current.style.display = textInAreaRef.current.value ? 'none' : 'block';
        }

    }

    function handleInput() {
        toggleStartImage();
    }

    function encryptText() {

        if (!textInAreaRef.current.value) {

            toggleStartImage(true);

            return;

        }

        const text = textInAreaRef.current.value;
        const encrypted = text
            .replace(/a/g, 'yw')
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        textAreaRef.current.textContent = encrypted;
        textInAreaRef.current.value = 'Clique em descriptografar para ver a palavra original.';

    }


    function decryptText() {

        const encryptedText = textAreaRef.current.textContent;

        if (!encryptedText) {
            console.log('Texto vazio');
            return;

        }


        const decrypted = encryptedText
            .replace(/yw/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');


        textInAreaRef.current.value = decrypted;


        textAreaRef.current.textContent = decrypted;

        textAreaRef.current.textContent = '';


    }


    function copyText() {
        const textarea = textAreaRef.current;
        const text = textarea.textContent;

        if (!text) {

            return;
        }

        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        textInAreaRef.current.value = 'Texto Copiado';


    }


    return (
        <div className='app-encription'>

            <div>

                <img className='logoImage' src={logoImage} alt='logoImage' />

                <div className='atention'> <img src={atentionImage} alt='atention' />
                    <strong>Apenas letras minúsculas e sem acento.
                    </strong> </div>

                <textarea ref={textInAreaRef}
                    placeholder='Digite seu texto'
                    onInput={handleInput}
                />


                <div className='encryptText'>

                    <button onClick={encryptText}>

                        Criptografar

                    </button>
                </div>

                <div className='decryptText'>
                    <button onClick={decryptText}>

                        Descriptografar

                    </button>

                </div>


            </div>

            <div className='box-textArea' ref={textAreaRef}>


            </div>

            <button className='buttonCopy' onClick={copyText}>Copiar</button>


            <div className='start' ref={startRef}>

                <img className='imageSearch' src={imageStart} alt='start' />

                <h1  >Nenhuma mensagem encontrada</h1>

                <strong >Digite um texto que você deseja criptografar ou descriptografar.</strong>


            </div>

            <strong className='dev'>By Diego Reis</strong>

            <a className='linkedin' href='https://www.linkedin.com/in/dreis-dev/' target='blank'> <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='linkedin' /></a>

            <a className='github' href='https://github.com/dreisdev' target='blank'> <img src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white' alt='github' /></a>


        </div>
    );
};

export default Encryption;