import React, {Component} from 'react'
import { Container,Tab,Row,Col,Nav } from 'react-bootstrap'

export default class About extends Component{
    render(){
        return(
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variante="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">RAMZES666</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">gpk~</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">DM</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">yamich</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Xakoda</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://imgproxy.virtus.pro/Cg8hOeFJbr9h26rJJdcTBvumH1nLTuze7IjvtGRRQhs/fill/350/385/no/1/aHR0cHM6Ly92aXJ0dXNwcm8tbWVkaWEuaGIuYml6bXJnLmNvbS9pbWFnZS9ubTRveFJEWFVIMGVFbk9UZUxDczNHRjJyYmFCbVRqV1FTb0RjZGo0LnBuZw.png"/>
                                    <p>RAMZES666 – керри состава Virtus.pro. Один из лучших игроков на своей позиции в мире, 
                                        победитель пяти мейджоров и апостол нашего времени. 
                                        Сигнатурные герои: Terrorblade, Juggernaut, Ursa.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://imgproxy.virtus.pro/SPtWraOkrhbLFM7VXNqNvohg0oi2SluQpLgHPFYqOG0/fill/350/385/no/1/aHR0cHM6Ly92aXJ0dXNwcm8tbWVkaWEuaGIuYml6bXJnLmNvbS9pbWFnZS95c25hYWY3SGd0MlJOV3J6TTJFbmtkTFJsR3AzU2N1YWppU3RoRkV4LnBuZw.png"/>
                                    <p>Данил «gpk~» Скутин — профессиональный игрок в Dota 2. Ранее играл в составах Vega Squadron и Gambit Esports. Данил является 3-м игроком в мире и первым в СНГ и Европе, кто достиг 11K MMR. gpk~ принадлежит рекорд по урону по героям в одной игре на про-сцене.
                                        Сигнатурные герои: Shadow Fiend, Templar Assassin, Ember Spirit</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://imgproxy.virtus.pro/OzZfRLh2siW2eo5mt1XWXKAc4UxXQNQba28CZmEbYvU/fill/350/385/no/1/aHR0cHM6Ly92aXJ0dXNwcm8tbWVkaWEuaGIuYml6bXJnLmNvbS9pbWFnZS81ODZTaXVlSDVqdmJXNzZuSUZYaE4wa0UxMWRxT0NMODAxcmNmd3lmLnBuZw.png"/>
                                    <p>Дмитрий Дорохин - перспективный молодой оффлейнер. Выступал за такие команды, как Vega Squadron, Winstrike, HellRaisers, Chaos.
                                        Известен отличным исполнением на своих сигнатурных ютилити-персонажах, таких как Sand King, Kunkka и Omniknight.
                                        Играл за VP.Prodigy с момента основания состава 1 апреля 2020.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <img src="https://imgproxy.virtus.pro/4OBZxTTLTWxSsgSbGOzR_P3VvWfyiowVfC8bWeFmscY/fill/350/385/no/1/aHR0cHM6Ly92aXJ0dXNwcm8tbWVkaWEuaGIuYml6bXJnLmNvbS9pbWFnZS9PYkFnNU9WaU1DUGI4aHpMaVJ4SkdnYlhCOTRQbUZyVXNmUFdDWjZILnBuZw.png"/>
                                    <p>Даниял Лазебный — игрок четвёртой позиции Virtus.pro. Родился 7 марта 2001 года в Санкт-Петербурге. 
                                        Сигнатурные герои: Rubick, Clockwerk, Phoenix.
                                        Присоединился к Virtus.pro 19 ноября 2021.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <img src="https://imgproxy.virtus.pro/cjLkobck_QBMdINwLaB5ZSFdrQoGcfyjnQWxxJ-QZ18/fill/350/385/no/1/aHR0cHM6Ly92aXJ0dXNwcm8tbWVkaWEuaGIuYml6bXJnLmNvbS9pbWFnZS9PUGQ1Z3N5aDJoRHVjVGpJbFNrY0RoS1Bva3ZwWFVmblZVSlNFVnNULnBuZw.png"/>
                                    <p>Егор Липартия — игрок пятой позиции в составе Virtus.pro по Dota 2.
                                        Родной город — Челябинск.
                                        До перехода в VP играл в академии Team Spirit.
                                        Сигнатурные герои: Disruptor, Bane, Grimstroke.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}