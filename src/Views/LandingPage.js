import {
		Container,
		Row,
		Col,
		Button
} from 'react-bootstrap'


function LandingPage() {

	return(<Container >
					<Row id="LandingPage">
						<Col xs="6">
							<h2>subtitle type</h2>
							<h1 className="display-1">Title of content</h1>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Ullam delectus eos, aliquam in. Quidem delectus laudantium accusamus eveniet, vitae dolorum, placeat natus, quas saepe velit eius? Non, facilis quis veniam!</p>
							<Button variant="primary" className="rounded-pills">Compra</Button>
						</Col>
					</Row>
					<Row id="about">
						<Col xs={6}>
							{"akjsd"}
						</Col>
						<Col xs={6}>
							{"akjsd"}
						</Col>
					</Row>
					<Row id="form">
						<Col xs={6}>
							{"akjsd"}
						</Col>
						<Col xs={6}>
							{"akjsd"}
						</Col>
					</Row>
				</Container>)
}

export default LandingPage;