import React from 'react';
import { Classroom } from './Classroom';

export const Chat = () => {
    return (
        <div className='rounded-3 m-4' style={{ backgroundColor: "#f5f5f5" }}>
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <Classroom />
                        <div className="card text-body mt-4">
                            <div className="card-body p-4">
                                <h4 className="mb-0">Comentarios</h4>
                                <p className="fw-light mb-4 pb-2">Comentarios en tiempo real de la clase</p>

                                <div className="d-flex flex-start">
                                    <div>
                                        <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                                        <div className="d-flex align-items-center mb-3">
                                            <p className="mb-0">Hace x horas</p>
                                        </div>
                                        <p className="mb-0">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-0" />
                        </div>

                        <div className="mt-5">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Escribe un mensaje" />
                                <button className="btn btn-warning" type="button" id="button-addon2" style={{ paddingTop: ".55rem" }}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
