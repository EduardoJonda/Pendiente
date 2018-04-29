package org.springframework.samples.utec.repository;

import org.springframework.data.repository.Repository;
import org.springframework.samples.utec.model.Res_formulario;

public interface FichaFormRepository extends Repository <Res_formulario, Integer>{
	
	
////guardar formulario
	void save(Res_formulario resFormulario);
	
}
