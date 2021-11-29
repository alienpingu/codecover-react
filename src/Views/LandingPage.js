import {
		Container,
		Row,
		Col,
		Button
} from 'react-bootstrap'

import phoneSrc from '../assets/image/phone.png'

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
										<Col className="icon-box" lg={6}>Details product</Col>
										<Col className="icon-box" lg={6}>Details product</Col>
										<Col className="icon-box" lg={6}>Details product</Col>
										<Col className="icon-box" lg={6}>Details product</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<Row id="form">
						<Col lg={6}>
							{"akjsd"}
						</Col>
						<Col lg={6}>
							{"akjsd"}
						</Col>
					</Row>
				</>)
}

export default LandingPage;