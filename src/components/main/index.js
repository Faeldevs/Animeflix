import './main.css'
import './carrosel.js'

const Main = () =>{
    return(
        <>
            <section>
                <div className='carrossel'>
                    <div className='carrossel-imagens'>
                        <div className='imagens-info'>
                            <p>Konosua</p>
                            <a href='https://www.google.com/search?q=konosuba&client=opera-gx&hs=krM&ei=TfsaZLXtCaHM1sQPy720iAM&gs_ssp=eJzj4tFP1zesLDA2zzIvyTZg9OLIzs_LLy5NSgQAW4oHxQ&oq=konosu&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMhAILhCABBCxAxCDARDUAhAKMg0IABCABBCxAxCDARAKMg0IABCABBCxAxCDARAKMhAILhCABBCxAxCDARDUAhAKMg0ILhCABBCxAxCDARAKMhAILhCDARDUAhCxAxCABBAKMggILhCxAxCDATIHCAAQgAQQCjIHCAAQgAQQCjINCAAQgAQQsQMQgwEQCjoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCOgQILhBDOggILhCABBCxAzoICC4QgAQQ1AI6BwguELEDEEM6BQgAELEDOgUILhCABDoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOg4ILhCABBCxAxCDARDUAjoOCC4QgAQQsQMQxwEQ0QM6BQgAEIAEOgsILhCABBCxAxCDAToOCC4QgwEQ1AIQsQMQgAQ6CAgAEIAEELEDSgQIQRgAUJ0NWK8aYKEhaAJwAXgAgAGPAYgB1gaSAQMwLjeYAQCgAQHIARLAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem1.jpg' alt='Imagem Konosua' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Fire Force - Season 2</p>
                            <a href='https://www.google.com/search?q=fire+force+season+2&client=opera-gx&ei=VAQbZLasCObX1sQPzu-QqAs&oq=fire+force&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgFMgoILhDUAhCxAxBDMgoILhDUAhCxAxBDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOgsILhCDARDUAhCxAzoLCAAQgAQQsQMQgwE6BwguENQCEEM6BAguEEM6CAguEIAEENQCOggIABCxAxCDAToLCC4Q1AIQsQMQgARKBAhBGABQAFihC2C0HGgAcAF4AIABiQGIAbsJkgEEMC4xMJgBAKABAcABAQ&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem2.jpg' alt='Imagem Fire Force - Season 2' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Demon Slayer</p>
                            <a href='https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKqssjAwNs8zYPTiSUnNzc9TKM5JrEwtAgB-Mgke&q=demon+slayer&oq=demon+s&aqs=chrome.1.69i57j46i131i340i433i512l2j0i433i512j0i512j46i131i433i512j46i340i433i512l2j0i131i433.1646j0j7&sourceid=chrome&ie=UTF-8' target="blank"><img src='/image/imagem3.jpg' alt='Imagem Demon Slayer' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Shingeki no Kyojin</p>
                            <a href='https://www.google.com/search?q=attack+o+ntitan&client=opera-gx&ei=ZAQbZJvNCIrM1sQP4Zi_kAU&ved=0ahUKEwibj4T-0-_9AhUKppUCHWHMD1IQ4dUDCA8&uact=5&oq=attack+o+ntitan&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoECC4QQzoECAAQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6BQgAEIAEOg4ILhCABBCxAxDHARDRAzoLCC4QgwEQsQMQgAQ6CAguELEDEIMBOggIABCxAxCDAToHCC4Q1AIQQzoOCC4QgAQQsQMQgwEQ1AI6BwguELEDEEM6CggAELEDEIMBEEM6CgguELEDEIMBEEM6BQguEIAEOgcILhCABBAKSgQIQRgAUABY5B9g4iBoAXABeACAAakBiAG-DpIBBDAuMTWYAQCgAQHAAQE&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem4.jpg' alt='Attack on Titan' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Dragon Ball Z</p>
                            <a href='https://www.google.com/search?q=dbz&client=opera-gx&ei=cwQbZMDkIpmh1sQPx42Q4AM&ved=0ahUKEwiA6rGF1O_9AhWZkJUCHccGBDwQ4dUDCA8&uact=5&oq=dbz&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIQCC4QgAQQsQMQgwEQ1AIQCjIQCC4QgAQQsQMQgwEQ1AIQCjIHCC4QgAQQCjIQCC4QgwEQ1AIQsQMQgAQQCjIQCC4QgwEQ1AIQsQMQgAQQCjIHCC4QgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjIHCAAQgAQQCjoLCAAQgAQQsQMQgwE6BQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoICAAQsQMQgwE6CAguEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQgwFKBAhBGABQAFjcAmDsBGgAcAF4AIABgAGIAfQCkgEDMC4zmAEAoAEBwAEB&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem5.jpg' alt='Dragon Ball Z' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Bleach</p>
                            <a href='https://www.google.com/search?q=bleach&client=opera-gx&ei=hgQbZOiTJNP31sQPobW-kAI&ved=0ahUKEwjo7rqO1O_9AhXTu5UCHaGaDyIQ4dUDCA8&uact=5&oq=bleach&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCC4Q1AIQsQMQQzIKCC4Q1AIQsQMQQzIKCC4Q1AIQsQMQQzIKCAAQgAQQsQMQCjIECAAQQzIHCAAQgAQQCjIHCAAQgAQQCjIKCAAQgAQQsQMQCjIHCAAQgAQQCjIHCAAQgAQQCjoHCC4Q1AIQQzoFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6CAgAELEDEIMBOggIABCABBCxA0oECEEYAFAAWO4GYM4HaABwAXgAgAGHAYgB3ASSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem6.jpg' alt='Imagem Bleach' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Shokugeki no Souma</p>
                            <a href='https://www.google.com/search?q=shokugeki+no+soma&client=opera-gx&ei=nwQbZM3RB9_c1sQP-c6siAI&gs_ssp=eJzj4tbP1TcwNMjIMTIzNWD0EizOyM8uTU_NzlTIy1cozs9NBACWQwoG&oq=shoku&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoILhDUAhCxAxBDMgoILhDUAhCxAxBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDoHCC4Q1AIQQzoECC4QQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgoILhDHARCvARBDOhEILhCABBCxAxDHARDRAxDUAjoLCC4QgAQQxwEQrwE6CAguEIAEENQCSgQIQRgAUABYlAVgxRFoAHABeACAAaMBiAG4BZIBAzAuNZgBAKABAcABAQ&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem7.jpg' alt='Imagem Shokugeki no Souma' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Tada Never Falls in Love</p>
                            <a href='https://www.google.com/search?q=Tada+Never+Falls+in+Love&client=opera-gx&ei=kAQbZOmOLd3w1sQPm9KriA4&ved=0ahUKEwjplqaT1O_9AhVduJUCHRvpCuEQ4dUDCA8&uact=5&oq=Tada+Never+Falls+in+Love&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCC4QgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCSgQIQRgAUPMJWPMJYIMMaAFwAXgAgAF9iAF9kgEDMC4xmAEAoAECoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem8.jpg' alt='Imagem Tada Never Falls in Love' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Naruto</p>
                            <a href='https://www.google.com/search?q=naruto&client=opera-gx&ei=qAQbZOulBMzp1sQP7eerqAk&ved=0ahUKEwjrmbae1O_9AhXMtJUCHe3zCpUQ4dUDCA8&uact=5&oq=naruto&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCC4Q1AIQsQMQQzIHCC4QsQMQQzIKCC4Q1AIQsQMQQzIHCAAQsQMQQzILCC4QgAQQsQMQgwEyBAgAEEMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEOgwIABDqAhC0AhBDGAE6DAguEOoCELQCEEMYAToOCAAQ6gIQtAIQChBDGAE6DQgAEI8BEOoCELQCGAI6DQguEI8BEOoCELQCGAI6BwguENQCEEM6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToICC4QgAQQsQM6CgguELEDENQCEENKBAhBGABQ_StYzTBgqzFoAXAAeACAAZoDiAG2CZIBCTAuMi4xLjEuMZgBAKABAbABFMABAdoBBAgBGAfaAQYIAhABGAo&sclient=gws-wiz-serp' target="blank"><img src='/image/imagem9.jpg' alt='Imagem Naruto' ></img></a>
                        </div>
                        <div className='imagens-info'>
                            <p>Shuumatsu no Valkyrie</p>
                            <a href='https://www.google.com/search?q=record+of+ragnarok&source=lmns&bih=930&biw=1712&client=opera-gx&hs=Mr2&hl=pt-BR&sa=X&ved=2ahUKEwiCx4Ty1O_9AhVVCNQKHd-CARUQ_AUoAHoECAEQAA' target="blank"><img src='/image/imagem10.jpg' alt='Imagem Record of Ragnarok' ></img></a>
                        </div>
                        

                        
                        
                    </div>
                </div>
            </section>

        </>

    )
}

export default Main;