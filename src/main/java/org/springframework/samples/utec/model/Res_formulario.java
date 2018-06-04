package org.springframework.samples.utec.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "res_formulario")
public class Res_formulario extends BaseEntity {
	
	@Column(name="telefono_personal")
	private int telefono_personal;
	
	@Column(name="nombre_contacto")
	private String nombre_contacto;
	
	@Column(name="parentesco_contacto")
	private String parentesco_contacto;

	@Column(name="telefono_contacto")
	private int telefono_contacto;
	
	@Column(name="conviviente")
	private String conviviente;
		
	@Column(name="enfermedad")
	private String enfermedad;

	@Column(name="grado_enfermedad")
	private String grado_enfermedad;
	
	@Column(name="alergias")
	private String alergias;
	
	@Column(name="medicamentos")
	private String medicamentos;
	
	@Column(name="tratamiento")
	private String tratamiento;
	
	@Column(name="grupo_sanguineo")
	private String grupo_sanguineo;

	@Column(name="deporte")
	private String deporte;
		
	@Column(name="rendimiento")
	private String rendimiento;

	@Column(name="apoyos")
	private String apoyos;
		
	@ManyToOne
    @JoinColumn(name = "alumno_idalumno")
    @JsonIgnore
    private Alumno alumno;

	public int getTelefono_personal() {
		return telefono_personal;
	}

	public void setTelefono_personal(int telefono_personal) {
		this.telefono_personal = telefono_personal;
	}

	public String getNombre_contacto() {
		return nombre_contacto;
	}

	public void setNombre_contacto(String nombre_contacto) {
		this.nombre_contacto = nombre_contacto;
	}

	public String getParentesco_contacto() {
		return parentesco_contacto;
	}

	public void setParentesco_contacto(String parentesco_contacto) {
		this.parentesco_contacto = parentesco_contacto;
	}

	public int getTelefono_contacto() {
		return telefono_contacto;
	}

	public void setTelefono_contacto(int telefono_contacto) {
		this.telefono_contacto = telefono_contacto;
	}

	public String getConviviente() {
		return conviviente;
	}

	public void setConviviente(String conviviente) {
		this.conviviente = conviviente;
	}

	public String getEnfermedad() {
		return enfermedad;
	}

	public void setEnfermedad(String enfermedad) {
		this.enfermedad = enfermedad;
	}

	public String getGrado_enfermedad() {
		return grado_enfermedad;
	}

	public void setGrado_enfermedad(String grado_enfermedad) {
		this.grado_enfermedad = grado_enfermedad;
	}

	public String getAlergias() {
		return alergias;
	}

	public void setAlergias(String alergias) {
		this.alergias = alergias;
	}

	public String getMedicamentos() {
		return medicamentos;
	}

	public void setMedicamentos(String medicamentos) {
		this.medicamentos = medicamentos;
	}

	public String getTratamiento() {
		return tratamiento;
	}

	public void setTratamiento(String tratamiento) {
		this.tratamiento = tratamiento;
	}

	public String getGrupo_sanguineo() {
		return grupo_sanguineo;
	}

	public void setGrupo_sanguineo(String grupo_sanguineo) {
		this.grupo_sanguineo = grupo_sanguineo;
	}

	public String getDeporte() {
		return deporte;
	}

	public void setDeporte(String deporte) {
		this.deporte = deporte;
	}

	public String getRendimiento() {
		return rendimiento;
	}

	public void setRendimiento(String rendimiento) {
		this.rendimiento = rendimiento;
	}

	public String getApoyos() {
		return apoyos;
	}

	public void setApoyos(String apoyos) {
		this.apoyos = apoyos;
	}

	public Alumno getAlumno() {
		return alumno;
	}

	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}

	@Override
	public String toString() {
		return "Res_formulario [telefono_personal=" + telefono_personal + ", nombre_contacto=" + nombre_contacto
				+ ", parentesco_contacto=" + parentesco_contacto + ", telefono_contacto=" + telefono_contacto
				+ ", conviviente=" + conviviente + ", enfermedad=" + enfermedad + ", grado_enfermedad="
				+ grado_enfermedad + ", alergias=" + alergias + ", medicamentos=" + medicamentos + ", tratamiento="
				+ tratamiento + ", grupo_sanguineo=" + grupo_sanguineo + ", deporte=" + deporte + ", rendimiento="
				+ rendimiento + ", apoyos=" + apoyos + ", alumno=" + alumno + "]";
	}

}
