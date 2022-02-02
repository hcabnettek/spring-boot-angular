package xyz.hcabnettek.jhipsterangular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.hcabnettek.jhipsterangular.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
