import {
		Container,
		Row,
		Col,
		Button,
		Form
} from 'react-bootstrap'

import phoneSrc from '../assets/image/phone.png'
import phoneSrc2 from '../assets/image/phone2s.png'
import phoneSrc3 from '../assets/image/phone3s.png'

import { Icon } from '@iconify/react';
import securityIcon from '@iconify/icons-mdi/security';
import clockFast from '@iconify/icons-mdi/clock-fast';
import rocketLaunch from '@iconify/icons-mdi/rocket-launch';
import qrcodeScan from '@iconify/icons-mdi/qrcode-scan';

import PurchaseForm from '../Components/PurchaseForm';
import NewsLetterForm from '../Components/NewsLetterForm';

function LandingPage() {

	return(<>
					<div id="LandingSection">
						<Container>
							<Row>
								<Col lg={6}>
									{/*<h2 className="banner-subtitle">subtitle type</h2>*/}
									<h1 className="banner-title">GreenPass<br/> sembre visibile!</h1>
									<p className="banner-text">Ordina subito la cover del tuo smartphone con sopra inciso il tuo GreenPass, sempre visibile anche con il telefono scarico.</p>
									<Button variant="outline-light bolder" className="rounded-pill" size="lg">ORDINA ORA</Button>
								</Col>
							</Row>
						</Container>
					</div>
					<Container className="bg-dark text-center text-uppercase text-light py-2" fluid>
						<h1>Disponibile per tutti gli smartphone</h1>
					</Container>
					<div id="AboutSection">
						<Container>
							<Row>
								<Col md={6}>
									<img className="preview-image" src={phoneSrc} alt="preview-cover" />
								</Col>
								<Col md={6}>
									<h2 className="banner-subtitle">Comodo, Semplice, Veloce!</h2>
									<h1 className="banner-title">Codecover Green Pass</h1>
									<p className="banner-text m-0">Il tuo GreenPass inciso sulla cover del tuo smartphone in modo indelebile ed indeformabile.</p>
									<p className="banner-text">Sempre leggibile, Sempre funzionante.</p>
									<Row>
										<Col className="icon-box" xs={6}><Icon icon={securityIcon} /> <span>Brevettato</span></Col>
										<Col className="icon-box" xs={6}><Icon icon={clockFast} /> <span>Sempre Attivo</span></Col>
										<Col className="icon-box" xs={6}><Icon icon={rocketLaunch} /> <span>Incisione Laser</span></Col>
										<Col className="icon-box" xs={6}><Icon icon={qrcodeScan} /> <span>Materiale inalterabile</span></Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<Row id="FormSection">
						<Col xs="12" className="text-center">
							<h2>Ordina ora la tua cover</h2>
							<p>Qr Code del tuo GreenPass sanitario inciso sulla cover per essere sempre visibile e pronto all' uso. Comodo, Semplice, Veloce!</p>
						</Col>
						<Col lg={6} className="d-flex justify-content-center">
							<img className="product-image" src={phoneSrc3} alt="preview-cover" />

						</Col>
						<Col lg={6}>
							<Container className="bold">	
								<h2>Total Black</h2>
								<p>€ 19,99</p>
								<PurchaseForm />
							</Container>
						</Col>
					</Row>
					<Container id="CoverSection" className="py-5">
						<Row>

							<Col lg={6}>
									<p className="banner-subtitle">GreenPass</p>
									<h1 className="fw-bold display-3">Cover<br/> Codecover</h1>
									<p>Codecover si occupa della riproduzione del QR-code sanitario (GreenPass) sulle cover dello smartphone. Il QR-code riprodotto mantiene le caratteristiche e le informazioni contenute nel GreenPass fornito dal sistema sanitario nazionale e, abbinato ad un documento d' identità, SOSTITUISCE la versione digitale anche se il device non dovesse funzionare ( batteria scarica - rottura dello schermo ) e la versione cartacea la cui copia potrebbe risultare sgualcita o alterata.</p>
									<p>Realizzate su MATERIALE INALTERABILE tramite incisione laser risulta la soluzione perfetta per praticità e reperibilità. Il contrasto su fondo opaco rende più visibile il codice anche in situazione di scarsa illuminazione.</p>
							</Col>
							<Col lg={6}>
								<img className="preview-image" src={phoneSrc2} alt="preview-cover2" />
							</Col>
						</Row>
					</Container>
					<div id="ChiSiamoSection" className="py-5 text-light">
						<Container>
							<Row>
								<Col lg={6}></Col>
								<Col lg={6}>
									<p className="banner-subtitle">CodeCover</p>
									<h1 className="fw-bold display-3">Chi siamo </h1>
									<p>Nata da un idea di semplicità e praticità. Codecover è un brevetto italiano per l' incisione al laser sulle cover degli smartphone. Brevettato come m.d.u 202021000004157.</p>
									<p>UTILE per usufruire dei servizi ove necessario mostrare il green pass sanitario sveltendo così le pratiche di controllo in ambiti aziendali, areoporti, ev. sportivi, ev. fieristici, etc...</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div id="ContactSection" className="py-4">
						<Container>
							<Row>
								<Col xs="12" className="text-center mb-4">
									<h2 className="display-4">Contatti</h2>
									<p className="h6text-gray">Che tu sia un privato o una azienda potete contattarci attraverso il form sottostante, vi risponderemo nel più breve tempo possibile</p>
								</Col>
								<Col lg="6">
									<h2>CodeCover</h2>
									<p>Contattaci per avere ulteriori informazioni</p>
									<a href="mailto:a@a.com" >email@email.com</a>
								</Col>
								<Col lg="6">
									<h2>Compila il form per contattarci</h2>
									<Form>
									  <Row className="mb-3">
									    <Form.Group as={Col} controlId="formGridEmail">
									      <Form.Label>Email</Form.Label>
									      <Form.Control type="email" placeholder="Enter email" />
									    </Form.Group>
									  </Row>
									  <Row className="mb-3">
									    <Form.Group as={Col} controlId="formGridEmail">
									      <Form.Label>Nome</Form.Label>
									      <Form.Control type="text" placeholder="Mario Rossi" />
									    </Form.Group>
									  </Row>
									  <Row className="mb-3">
									    <Form.Group as={Col} controlId="formGridEmail">
									      <Form.Label>Messaggio</Form.Label>
									      <Form.Control type="text" placeholder="Ciao! Avevo bisogno di.." />
									    </Form.Group>
									  </Row>
									  <Form.Group className="mb-3" id="formGridCheckbox">
									    <Form.Check type="checkbox" label="Check me out" />
									  </Form.Group>

									  <Button variant="primary" type="submit">
									    Submit
									  </Button>
									</Form>
								</Col>
							</Row>
						</Container>
					</div>
					<div id="newsletterSection" className="text-center text-light bg-dark py-4 ">
						<Container>
							<h2>Lasciami una email</h2>
							<p>per esser informato su tutte le nostre novità ed offerte</p>
							<NewsLetterForm />	
						</Container>
					</div>
				</>)
}

export default LandingPage;