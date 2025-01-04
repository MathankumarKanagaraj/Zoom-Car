import React from 'react';
import { Container } from 'react-bootstrap';

export const PageNotFound = () => {
    return (
        <Container fluid>
        <div>
            <div className="row text-center">
                <div className="col-12 my-5">
                    
                    <h1 style={{fontSize:"85px"}}>Oops!</h1>
                </div>
            </div>

            <div >
                <div className="text-center">
                    <h2 className="display-1">404</h2>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <p className="lead text-muted">
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <a href="/dashboard" className="btn btn-primary">
                        Return to Homepage
                    </a>
                </div>
            </div>
        </div>
        </Container>
    );
};
