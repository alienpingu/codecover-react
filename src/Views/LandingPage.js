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
									<h2 className="banner-subtitle">subtitle type</h2>
									<h1 className="banner-title">Title of content</h1>
									<p className="banner-text">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Ullam delectus eos, aliquam in. Quidem delectus laudantium accusamus eveniet, vitae dolorum, placeat natus, quas saepe velit eius? Non, facilis quis veniam!</p>
									<Button variant="primary" className="rounded-pill" size="lg">Compra</Button>
								</Col>
							</Row>
						</Container>
					</div>
					<div id="AboutSection">
						<Container>
							<Row>
								<Col lg={6}>
									<img className="preview-image" src={phoneSrc} alt="preview-cover" />
								</Col>
								<Col lg={6}>
									<h2 className="banner-subtitle">subtitle type</h2>
									<h1 className="banner-title">Title of content</h1>
									<p className="banner-text m-0">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Ullam delectus eos, aliquam in.</p>
									<p className="banner-text">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Ullam delectus eos, aliquam in.</p>
									<Row>
										<Col className="icon-box" lg={6}><Icon icon={securityIcon} /> <span>Details product</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={clockFast} /> <span>Details product</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={rocketLaunch} /> <span>Details product</span></Col>
										<Col className="icon-box" lg={6}><Icon icon={qrcodeScan} /> <span>Details product</span></Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<Row id="FormSection">
						<Col lg={6}>
							{"akjsd"}
						</Col>
						<Col lg={6}>
							<Container>
								<PurchaseForm />
							</Container>
						</Col>
					</Row>
				</>)
}

export default LandingPage;