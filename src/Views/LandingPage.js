import {
		Container,
		Row,
		Col,
		Button
} from 'react-bootstrap'

import phoneSrc from '../assets/image/phone.png'

import { Icon } from '@iconify/react';
import securityIcon from '@iconify/icons-mdi/security';
import clockFast from '@iconify/icons-mdi/clock-fast';
import rocketLaunch from '@iconify/icons-mdi/rocket-launch';
import qrcodeScan from '@iconify/icons-mdi/qrcode-scan';

import PurchaseForm from '../Components/PurchaseForm';

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
								<Col lg={6}>
									<img className="preview-image" src={phoneSrc} alt="preview-cover" />
								</Col>
								<Col lg={6}>
									<h2 className="banner-subtitle">Comodo, Semplice, Veloce!</h2>
									<h1 className="banner-title">Codecover Green Pass</h1>
									<p className="banner-text m-0">Il tuo GreenPass inciso sulla cover del tuo smartphone in modo indelebile ed indeformabile.</p>
									<p className="banner-text">Sempre leggibile, Sempre funzionante.</p>
									<Row>
										<Col className="icon-box" lg={6}><Icon icon={securityIcon} /> <span>Brevettato</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={clockFast} /> <span>Sempre Attivo</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={rocketLaunch} /> <span>Incisione Laser</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={qrcodeScan} /> <span>Materiale inalterabile</span></Col>
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
						<Col lg={6}>
							{"Foto"}
						</Col>
						<Col lg={6}>
							<Container className="bold">	
								<h2>Total Black</h2>
								<p>€ 19,99</p>
								<PurchaseForm />
							</Container>
						</Col>
					</Row>
					<Row id="CoverSection">
						<Col lg={6}>
							{"Foto"}
						</Col>
						<Col lg={6}>
							<Container>
								<p className="banner-subtitle">GreenPass</p>
								<h1 className="fw-bold display-3">Cover<br/> Codecover</h1>
								<p>Codecover si occupa della riproduzione del QR-code sanitario (GreenPass) sulle cover dello smartphone. Il QR-code riprodotto mantiene le caratteristiche e le informazioni contenute nel GreenPass fornito dal sistema sanitario nazionale e, abbinato ad un documento d' identità, SOSTITUISCE la versione digitale anche se il device non dovesse funzionare ( batteria scarica - rottura dello schermo ) e la versione cartacea la cui copia potrebbe risultare sgualcita o alterata.</p>
								<p>Realizzate su MATERIALE INALTERABILE tramite incisione laser risulta la soluzione perfetta per praticità e reperibilità. Il contrasto su fondo opaco rende più visibile il codice anche in situazione di scarsa illuminazione.</p>
							</Container>
						</Col>
					</Row>
				</>)
}

export default LandingPage;